import React, { useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { CiEdit } from "react-icons/ci";
import Sidebar from './Sidebar';

export const WeekBoard = () => {
    return (
        <div className="flex flex-row h-screen w-full bg-gray-900 text-neutral-50">
            <Sidebar />
            <Board />
        </div>
    );
};

const Board = () => {
    const [cards, setCards] = useState([]);
    const [columns, setColumns] = useState([]);

    const handleAddColumn = () => {
        const newColumn = {
            id: `column-${columns.length + 1}`,
            title: 'New Column',
            headingColor: 'text-neutral-500',
        };

        setColumns([...columns, newColumn]);
    };

    const handleDeleteColumn = (id) => {
        setColumns((prevColumns) => prevColumns.filter((column) => column.id !== id));
        setCards((prevCards) => prevCards.filter((card) => card.column !== id));
    };

    const updateColumnTitle = (id, newTitle) => {
        setColumns((prevColumns) =>
            prevColumns.map((col) =>
                col.id === id ? { ...col, title: newTitle } : col
            )
        );
    };

    const handleDeleteCard = (id) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    };

    const handleDragStart = (e, card) => {
        e.dataTransfer.setData("cardId", card.id);
    };

    const handleDragEnd = (e, column) => {
        const cardId = e.dataTransfer.getData("cardId");

        const indicators = getIndicators(column);
        const { element } = getNearestIndicator(e, indicators);

        const before = element ? element.dataset.before : "-1";

        if (before !== cardId) {
            let copy = [...cards];
            let cardToTransfer = copy.find((c) => c.id === cardId);
            if (!cardToTransfer) return;
            cardToTransfer = { ...cardToTransfer, column };

            copy = copy.filter((c) => c.id !== cardId);

            const moveToBack = before === "-1";

            if (moveToBack) {
                copy.push(cardToTransfer);
            } else {
                const insertAtIndex = copy.findIndex((el) => el.id === before);
                if (insertAtIndex === undefined) return;
                copy.splice(insertAtIndex, 0, cardToTransfer);
            }

            setCards(copy);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        highlightIndicator(e);
    };

    const clearHighlights = (els) => {
        const indicators = els || getIndicators();
        if (Array.isArray(indicators)) {
            indicators.forEach((i) => {
                i.style.opacity = "0";
            });
        }
    };

    const highlightIndicator = (e) => {
        const indicators = getIndicators();
        clearHighlights(indicators);
        const el = getNearestIndicator(e, indicators);
        if (el && el.element) {
            el.element.style.opacity = "1";
        }
    };

    const getNearestIndicator = (e, indicators) => {
        const DISTANCE_OFFSET = 50;
        const el = indicators.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = e.clientY - (box.top + DISTANCE_OFFSET);

                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            },
            {
                offset: Number.NEGATIVE_INFINITY,
                element: indicators[indicators.length - 1],
            }
        );
        return el;
    };

    const getIndicators = (column) => {
        return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
    };

    return (
        <div className="flex h-full w-full gap-3 overflow-scroll p-12">
            {columns.map((column) => (
                <div key={column.id} className="flex-shrink-0 w-56">
                    <Column
                        title={column.title}
                        headingColor={column.headingColor}
                        cards={cards.filter((c) => c.column === column.id)}
                        column={column.id}
                        setCards={setCards}
                        handleDeleteColumn={handleDeleteColumn}
                        updateColumnTitle={updateColumnTitle}
                        handleDragStart={handleDragStart}
                        handleDragEnd={handleDragEnd}
                        handleDragOver={handleDragOver}
                        clearHighlights={clearHighlights}
                        handleDeleteCard={handleDeleteCard} // Pass handleDeleteCard to Column
                    />
                </div>
            ))}
            <button
                onClick={handleAddColumn}
                className="flex items-center px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-50"
            >
                <FiPlus className="mr-1" /> Add Column
            </button>
        </div>
    );
};

const Column = ({ title, headingColor, cards, column, setCards, handleDeleteColumn, updateColumnTitle, handleDragStart, handleDragEnd, handleDragOver, clearHighlights, handleDeleteCard }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        updateColumnTitle(column, newTitle);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setNewTitle(title);
    };

    return (
        <div className="w-56 shrink-0">
            <div className="mb-3 flex flex-col justify-between">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={newTitle}
                            onChange={handleTitleChange}
                            className="text-neutral-50 bg-neutral-800 border border-neutral-500 rounded px-2 py-1 mb-2"
                        />
                        <div className="flex justify-start mt-2">
                            <button onClick={handleSaveClick} className="text-neutral-400 hover:text-neutral-50 mr-2">
                                Save
                            </button>
                            <button onClick={handleCancelClick} className="text-neutral-400 hover:text-neutral-50">
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex justify-between items-center">
                        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
                        <span className="rounded text-sm text-neutral-400">{cards.length}</span>
                        <div className="flex items-center">
                            <button onClick={handleEditClick} className="ml-2 text-neutral-400 hover:text-neutral-50">
                                <CiEdit />
                            </button>
                            <button onClick={() => handleDeleteColumn(column)} className="ml-2 text-neutral-400 hover:text-red-500">
                                <FiTrash />
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div
                onDrop={(e) => handleDragEnd(e, column)}
                onDragOver={handleDragOver}
                onDragLeave={clearHighlights}
                className="h-full w-full bg-green-800/0"
            >
                {cards.map((c) => (
                    <Card
                        key={c.id}
                        {...c}
                        handleDragStart={handleDragStart}
                        handleDelete={handleDeleteCard} // Pass handleDeleteCard to Card
                        setCards={setCards}
                    />
                ))}
                <DropIndicator beforeId={null} column={column} />
                <AddCard column={column} setCards={setCards} />
            </div>
        </div>
    );
};

const Card = ({ title, id, column, handleDelete, handleDragStart, setCards }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        setCards(prevCards =>
            prevCards.map(card =>
                card.id === id ? { ...card, title: newTitle } : card
            )
        );
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setNewTitle(title);
    };

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    return (
        <>
            <DropIndicator beforeId={id} column={column} />
            <motion.div
                layout
                layoutId={id}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, { title, id, column })}
                className="cursor-pointer rounded border border-neutral-700 bg-green-800 p-3 relative"
            >
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={newTitle}
                            onChange={handleTitleChange}
                            className="w-full rounded border border-violet-400 bg-violet-400/20 p-2 text-sm text-neutral-100 placeholder-violet-300 focus:outline-0"
                        />
                        <div className="mt-1.5 flex items-center justify-end gap-1.5">
                            <button
                                onClick={handleCancelClick}
                                className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveClick}
                                className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
                            >
                                Save
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <p className="text-sm text-neutral-100">{title}</p>
                        <button
                            onClick={() => handleDelete(id)}
                            className="absolute top-1 right-1 text-neutral-400 hover:text-red-500"
                        >
                            <FiTrash />
                        </button>
                        <button
                            onClick={handleEditClick}
                            className="absolute top-1 right-6 text-neutral-400 hover:text-yellow-500"
                        >
                            <CiEdit />
                        </button>
                    </>
                )}
            </motion.div>
        </>
    );
};

const DropIndicator = ({ beforeId, column }) => {
    return (
        <div
            data-before={beforeId || "-1"}
            data-column={column}
            className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
        />
    );
};

const AddCard = ({ column, setCards }) => {
    const [text, setText] = useState("");
    const [adding, setAdding] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim().length) return;

        const newCard = {
            column,
            title: text.trim(),
            id: Math.random().toString(),
        };

        setCards((pv) => [...pv, newCard]);

        setAdding(false);
    };

    return (
        <>
            {adding ? (
                <motion.form layout onSubmit={handleSubmit}>
                    <textarea
                        onChange={(e) => setText(e.target.value)}
                        autoFocus
                        placeholder="Add new task..."
                        className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
                    />
                    <div className="mt-1.5 flex items-center justify-end gap-1.5">
                        <button
                            onClick={() => setAdding(false)}
                            className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
                        >
                            <span>Add</span>
                            <FiPlus />
                        </button>
                    </div>
                </motion.form>
            ) : (
                <motion.button
                    layout
                    onClick={() => setAdding(true)}
                    className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                >
                    <span>Add card</span>
                    <FiPlus />
                </motion.button>
            )}
        </>
    );
};

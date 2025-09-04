import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTeacher,
  removeTeacher,
  addNoteToTeacher,
  updateFollowUpTeacher,
} from "../features/teachersSlice";

const TeacherComponent = () => {
  const teachers = useSelector((state) => state.teachers);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name) return;
    dispatch(addTeacher({ id: Date.now(), name }));
    setName("");
  };

  return (
    <div style={{ border: "1px solid #aaa", padding: "10px", margin: "10px" }}>
      <h2>👩‍🏫 Teachers</h2>

      <input
        type="text"
        placeholder="Enter teacher name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Teacher</button>

      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id} style={{ marginBottom: "10px" }}>
            <strong>{teacher.name}</strong>
            <button
              onClick={() => dispatch(removeTeacher(teacher.id))}
              style={{ marginLeft: "10px" }}
            >
              ❌ Remove
            </button>

            {/* Notes */}
            <TeacherNotesSection teacher={teacher} dispatch={dispatch} />

            {/* Follow-up */}
            <TeacherFollowUpSection teacher={teacher} dispatch={dispatch} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const TeacherNotesSection = ({ teacher, dispatch }) => {
  const [note, setNote] = useState("");

  const handleAddNote = () => {
    if (!note) return;
    dispatch(addNoteToTeacher({ id: teacher.id, note }));
    setNote("");
  };

  return (
    <div style={{ marginTop: "5px" }}>
      <input
        type="text"
        placeholder="Add note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={handleAddNote}>➕ Add Note</button>
      <ul>
        {teacher.notes?.map((n, idx) => (
          <li key={idx}>
            {n.text} <em>({new Date(n.date).toLocaleDateString()})</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TeacherFollowUpSection = ({ teacher, dispatch }) => {
  const [date, setDate] = useState("");

  const handleFollowUp = () => {
    if (!date) return;
    dispatch(updateFollowUpTeacher({ id: teacher.id, date }));
    setDate("");
  };

  return (
    <div style={{ marginTop: "5px" }}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleFollowUp}>📅 Set Follow-Up</button>
      {teacher.nextFollowUp && (
        <p>
          Next Follow-Up:{" "}
          <strong>{new Date(teacher.nextFollowUp).toLocaleDateString()}</strong>
        </p>
      )}
    </div>
  );
};

export default TeacherComponent;

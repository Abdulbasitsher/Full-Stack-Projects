import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addStudent,
  removeStudent,
  addNoteToStudent,
  updateFollowUp,
} from "../features/studentsSlice";

const StudentComponent = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name) return;
    dispatch(addStudent({ id: Date.now(), name }));
    setName("");
  };

  return (
    <div style={{ border: "1px solid #aaa", padding: "10px", margin: "10px" }}>
      <h2>📚 Students</h2>

      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Student</button>

      <ul>
        {students.map((student) => (
          <li key={student.id} style={{ marginBottom: "10px" }}>
            <strong>{student.name}</strong>
            <button
              onClick={() => dispatch(removeStudent(student.id))}
              style={{ marginLeft: "10px" }}
            >
              ❌ Remove
            </button>

            {/* Notes */}
            <NotesSection student={student} dispatch={dispatch} />

            {/* Follow-up */}
            <FollowUpSection student={student} dispatch={dispatch} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const NotesSection = ({ student, dispatch }) => {
  const [note, setNote] = useState("");

  const handleAddNote = () => {
    if (!note) return;
    dispatch(addNoteToStudent({ id: student.id, note }));
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
        {student.notes?.map((n, idx) => (
          <li key={idx}>
            {n.text} <em>({new Date(n.date).toLocaleDateString()})</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FollowUpSection = ({ student, dispatch }) => {
  const [date, setDate] = useState("");

  const handleFollowUp = () => {
    if (!date) return;
    dispatch(updateFollowUp({ id: student.id, date }));
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
      {student.nextFollowUp && (
        <p>
          Next Follow-Up:{" "}
          <strong>{new Date(student.nextFollowUp).toLocaleDateString()}</strong>
        </p>
      )}
    </div>
  );
};

export default StudentComponent;

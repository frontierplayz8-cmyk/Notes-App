import React, { useEffect, useRef, useState } from "react";
import { Trash, X } from "lucide-react";

export default function NotesUI() {
  const showref = useRef(null);
  const input1ref = useRef(null);
  const textarearef = useRef(null);
  const Randerer = useRef(true)

  const [title, settitle] = useState();
  const [disc, setdisc] = useState();
  const [note, setnote] = useState([]);
  const date = new Date();

  const formatted = `${date.getMonth() + 1}-${date.getDate()}`;

  useEffect(()=>{
     if (Randerer.current) {
      Randerer.current = false
      return
    }
     
    localStorage.setItem("note" , JSON.stringify(note))
  }, [note])

  useEffect(()=>{
    const not1e = JSON.parse(localStorage.getItem("note"))
    setnote(not1e)
  }, [])

  const showNotes = () => {
    if (showref.current) {
      showref.current.classList.add("addnotes");
      showref.current.style.display = "flex";
    }
  };
  const hideNotes = (e) => {
    if (showref.current) {
      showref.current.classList.remove("addnotes");
      showref.current.style.display = "none";
    }
  };

  const clearinput = () => {
    settitle("");
  };
  const cleartext = () => {
    setdisc("");
  };

  const AddNotes = () => {
    if (!input1ref.current.value && !textarearef.current.value) {
      settitle("Please Write Your Title");
      setdisc("Please Write Your Discription");
    } else if (!textarearef.current.value) {
      setdisc("Please Write Your Discription");
    } else if (!input1ref.current.value) {
      settitle("Please Write Your Title");
    } else if (input1ref.current.value && textarearef.current.value) {
      console.log("Note Added Successfully");
      hideNotes();
      const newNote = {
      title: input1ref.current.value,
      disc: textarearef.current.value,
      date: formatted,
    };
    setnote([...note, newNote]);
    }
  };

  const deleteNote = (index) => {
    setnote((prev) => prev.filter((_, i) => i !== index))
  }
  return (
    <>
      <div className="notes-app">
        <div style={{ display: "none" }} ref={showref}>
          <div className="noteend">
            <h1>Add Notes</h1>
            <X style={{cursor: "pointer"}} onClick={hideNotes} color="white" />
          </div>
          <input
            onClick={clearinput}
            ref={input1ref}
            type="text"
            placeholder="Title of Note"
          />
          <p
            style={{
              color: "white",
              alignSelf: "flex-start",
              width: 90 + "%",
              fontSize: 18 + "px",
              paddingLeft: 8 + "%",
              opacity: 0.6,
            }}
          >
            {title}
          </p>
          <textarea
            onClick={cleartext}
            ref={textarearef}
            type="text"
            placeholder="Details of Notes"
          />
          <p
            style={{
              color: "white",
              alignSelf: "flex-start",
              width: 90 + "%",
              fontSize: 18 + "px",
              paddingLeft: 8 + "%",
              opacity: 0.6,
            }}
          >
            {disc}
          </p>
          <button
            onClick={() => {
              AddNotes();
            }}
          >
            Save
          </button>
        </div>
        <aside className="sidebar">
          <div className="brand">MyNotes</div>
          <div className="sidebar-footer">
            <button className="btn ghost">Settings</button>
          </div>
        </aside>

        <main className="main">
          <header className="topbar">
            <div className="search">
              <input
                placeholder="Search notes or tags..."
                aria-label="Search notes"
              />
              <span className="kbd">⌘K</span>
            </div>

            <div className="actions">
              <button onClick={() => {
                showNotes()
              }} className="btn">
                + New Note
              </button>
              <button className="icon-btn" aria-label="grid view">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <rect x="3" y="3" width="8" height="8" rx="2" />
                  <rect x="13" y="3" width="8" height="8" rx="2" />
                  <rect x="3" y="13" width="8" height="8" rx="2" />
                  <rect x="13" y="13" width="8" height="8" rx="2" />
                </svg>
              </button>
            </div>
          </header>

          <section className="notes-grid" aria-live="polite">
            <article className="note-card">
              <h3 className="note-title">Meeting notes — Q4 roadmap</h3>
              <p className="note-excerpt">
                Brainstorm priorities, timelines and owners. Capture follow-ups
                for design review.
              </p>
              <div className="note-meta">
                <time>12-1</time>
              </div>
            </article>
            {note.map((n,i) => (
              <article key={i} className="note-card">
                <h3 className="note-title">{n.title}</h3>
                <p className="note-excerpt">{n.disc}</p>
                <div className="note-meta">
                  <time>{n.date}</time>
                  <Trash style={{cursor: "pointer"}} onClick={() => deleteNote(i)} color="hsl(189, 94%, 43%)"/>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";

export const NotesList = () => {
    const [tasks, setTasks] = useState([])
    
    const notesRef = collection(db, 'notes')

    useEffect(() => {
        const getNotes = async () => {
            await getDocs(notesRef).then((note) => {
                let data = note.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
                setTasks(data)
            })
        }
        getNotes()
    }, [])

    return (
        <Container>
                {
                    tasks.length && tasks.map((task) => (
                        <List>
                            <h3>{task.title}</h3>
                            <p>{task.body}</p>
                        </List>
                    ))
                }
        </Container>
    )
}

const Container = styled.div`
    color: white;
    background-color: #1a202c;
    height: 50vh;
    width: 70vw;
    margin: 2%;
    border-radius: 20px;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    height: 100%;
`;
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/header/Header';
import Notes from './components/notes/Notes';
import CreateNote from './components/editNote/CreateNote';
import EditNote from './components/editNote/EditNote';
import ButtonAdd from './components/button/ButtonAdd';
import ButtonCreate from './components/button/ButtonCreate';
import ButtonSave from './components/button/ButtonSave';

import { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState("reading")

  const [listNotes, setListNotes] = useState([])

  const [note, setNote] = useState("vazio")

  const [editNote, setEditNote] = useState()

  const [noteEdited, setNoteEdited] = useState()

  const handleSetNote = (note) => {
    setNote(note)
  }

  const handleEditNote = (note) => {
    setEditNote(note)
  }

  const handleEditNoteSave = (index, newValue) => {
    const newNotes = listNotes.map((value, i) => {
      if (index === i) {
        return newValue;
      } else {
        return value;
      }
    })
    setListNotes(newNotes)
  }

  const handleCreateNote = (note) => {
    const newNotes = [note, ...listNotes]
    setListNotes(newNotes)
  }

  const handleTab = (tab) => {
    setTab(tab)
  }

  if (tab === "reading") {
    return (
      <View style={styles.body}>
        <StatusBar auto style="light" />
        <Header />
        <Notes
          listNotes={listNotes}
          handleEditNote={handleEditNote}
          handleTab={handleTab}
        />
        <ButtonAdd handleTab={handleTab} />
      </View>
    )
  } else if (tab === "create-note") {
    return (
      <View style={styles.body}>
        <StatusBar auto style="light" />
        <Header />
        <CreateNote handleSetNote={handleSetNote} />
        <ButtonCreate
          handleTab={handleTab}
          handleCreateNote={handleCreateNote}
          note={note}
          handleSetNote={handleSetNote}
        />
      </View>
    )
  } else if (tab === "edit-note") {
    return (
      <View style={styles.body}>
        <StatusBar auto style="light" />
        <Header />
        <EditNote
          editNote={editNote}
          listNotes={listNotes}
          setEditNote={setEditNote}
          setNoteEdited={setNoteEdited}
          noteEdited={noteEdited}
        />
        <ButtonSave
          editNote={editNote}
          setEditNote={setEditNote}
          handleEditNoteSave={handleEditNoteSave}
          noteEdited={noteEdited}
          handleTab={handleTab}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  body: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "rgba(60, 60, 60, 1)"
  }
});

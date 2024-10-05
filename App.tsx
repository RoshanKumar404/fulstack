import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [names, setNames] = useState([]);

  useEffect(() => { 
    axios.get('http://192.168.202.226:3000/api/name')
      .then((response) => {
        setNames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>Names👦</Text>
      <Text style={styles.id}>Numbers of students {names.length}</Text>
      {names.map((item) => (
        <View style={styles.row} key={item.id}>
          
          <Text style={styles.id}>{item.id}</Text>
          <Text style={styles.name}>{item.nmae}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    color: "#e66100",
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
    color: '#333',
  },
  title: {
    fontSize: 18,
    color: '#666',
  },
  id: {
    fontSize: 18,
    color: '#999',
  },
});

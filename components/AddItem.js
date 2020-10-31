import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const AddItem = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handlePress = () => {
    if (text) {
      setTodos([{ text, key: uuidv4() }, ...todos]);
      setText("");
    } else {
      Alert.alert(
        "Null Value",
        "You can only complete todo when you enter something",
        [{ text: "Understood" }]
      );
    }
  };

  const handleDelete = (key) => {
    const newTodos = todos.filter((todo) => todo.key != key);
    setTodos(newTodos);
  };

  // getting window height for responsive layouts
  const windowHeight = Dimensions.get("window").height;

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Something..."
        onChangeText={(text) => setText(text)}
        value={text}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Icon type="font-awesome" name="plus" color={"#F4FBFB"} size={19} />
        <Text style={styles.text}>add item</Text>
      </TouchableOpacity>

      <View style={styles.todosContainer}>
        <Text style={styles.todosContainerHeading}>
          {todos.length > 0 ? "Your Todos" : "Your Todos will go here"}
        </Text>

        <FlatList
          style={{ marginTop: 30, maxHeight: windowHeight / 2 - 100 }}
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.todoItemContainer}>
              <Text style={styles.todoItem}>{item.text}</Text>
              <TouchableOpacity
                style={{ padding: 3 }}
                onPress={() => handleDelete(item.key)}
              >
                <Icon type="font-awesome" name="remove" color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: "#C5CED5",
    marginTop: 60,
    marginHorizontal: 20,
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1AAE9F",
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 5,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    marginLeft: 5,
    textTransform: "uppercase",
    fontSize: 16,
    color: "#F4FBFB",
  },
  todosContainer: {
    marginTop: 40,
  },
  todosContainerHeading: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  todoItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 20,
    borderWidth: 2,
    marginTop: 5,
    borderRadius: 5,
  },
  todoItem: {
    fontSize: 18,
  },
});

export default AddItem;

import { useState } from "react"
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native"

import { api } from "@/server/api"
import { isAxiosError } from "axios"

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSignIn() {
    try {
      const response = await api.post("/user", {
        email,
        password,
      })

      alert("Olá " + response.data.name)
    } catch (error) {
      if (isAxiosError(error)) {
        return alert(error.response?.data)
      }

      alert("Não foi possível entrar.")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    gap: 16,
  },
  input: {
    height: 54,
    width: "100%",
    backgroundColor: "#E3E3E3E3",
    borderRadius: 5,
    padding: 16,
  },
  button: {
    height: 54,
    width: "100%",
    backgroundColor: "#CECECE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
})
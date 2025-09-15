import { useState } from "react";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Center } from "@/components/ui/center";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import {
  Pressable,
  SafeAreaView,
  View,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";

export default function LoginScreen() {
  const router = useRouter();
  const mode = useColorScheme();
  const screenHeight = Dimensions.get("window").height;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    try {
    console.log("Login dengan:", username, password);
    router.push("/(tabs)"); // contoh redirect
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "Terjadi kesalahan saat login");
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: mode === "dark" ? "black" : "white",
        height: screenHeight,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Image
        style={{ width: 50, height: 50, margin: 30 }}
        source={require("@/assets/images/LOGO.png")}
        alt="logo"
        mt="20%"
      /> */}
      <Text
        style={{
          fontWeight: "800",
          fontFamily: "Lato",
          fontSize: 24,
          color: mode === "dark" ? "white" : "black",
        }}
      >
        Selamat datang
      </Text>

      <VStack space="md" style={{ margin: 10, width: "90%" }}>
        <Input
          style={{
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
          }}
        >
          <InputSlot style={{ paddingRight: 8 }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={"#535862"}
            />
          </InputSlot>
          <InputField
            placeholder="Masukkan username / email Anda"
            value={username}
            onChangeText={setUsername}
            style={{
              color: mode === "dark" ? "white" : "black",
              flex: 1,
            }}
            placeholderTextColor={mode === "dark" ? "#888" : "#888"}
          />
        </Input>

        <Input
          style={{
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
          }}
        >
          <InputField
            placeholder="Kata sandi"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={{
              color: mode === "dark" ? "white" : "black",
              flex: 1,
            }}
            placeholderTextColor={mode === "dark" ? "#888" : "#888"}
          />
          <InputSlot style={{ paddingLeft: 8 }}>
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Entypo
                name={showPassword ? "eye" : "eye-with-line"}
                size={20}
                color="#535862"
              />
            </Pressable>
          </InputSlot>
        </Input>

        <Button
          size="md"
          variant="solid"
          style={{
            marginTop: 20,
            borderRadius: 12,
            backgroundColor: "#007AFF",
            paddingVertical: 12,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            minHeight: 32,
          }}
          onPress={handleLogin}
          disabled={loading}
        >
          <ButtonText
            style={{
              color: "#ffffff",
              fontFamily: "Lato",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {loading ? "Loading..." : "Masuk"}
          </ButtonText>
        </Button>

        <Center style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => router.push("/modal")}>
            <Text
              style={{
                fontFamily: "Lato",
                color: mode === "dark" ? "white" : "black",
              }}
            >
              Lupa Kata Sandi ?
            </Text>
          </TouchableOpacity>
        </Center>
      </VStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

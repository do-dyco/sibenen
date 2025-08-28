import { useState } from "react";
import { useRouter } from "expo-router";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  useColorScheme,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { VStack } from "@/components/ui/vstack";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { loginStyles } from "@/styles/loginStyles";

export default function LoginScreen() {
  const router = useRouter();
  const mode = useColorScheme();
  const screenHeight = Dimensions.get("window").height;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    console.log("Login dengan:", username, password);
    router.push("/(tabs)");
  };

  return (
    <SafeAreaView
      style={[
        loginStyles.container,
        {
          backgroundColor: mode === "dark" ? "black" : "white",
          height: screenHeight,
        },
      ]}
    >
      {/* Judul */}
      <Text
        style={[
          loginStyles.title,
          { color: mode === "dark" ? "white" : "black" },
        ]}
      >
        Selamat datang
      </Text>

      <VStack style={loginStyles.formWrapper} space="xl">
        {/* Username / Email */}
        <Input style={loginStyles.input}>
          <InputSlot style={loginStyles.inputIcon}>
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
            style={{ color: mode === "dark" ? "white" : "black", flex: 1 }}
            placeholderTextColor="#888"
          />
        </Input>

        {/* Password */}
        <Input style={loginStyles.input}>
          <InputField
            placeholder="Kata sandi"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={{ color: mode === "dark" ? "white" : "black", flex: 1 }}
            placeholderTextColor="#888"
          />
          <InputSlot style={loginStyles.inputIcon}>
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Entypo
                name={showPassword ? "eye" : "eye-with-line"}
                size={20}
                color="#535862"
              />
            </Pressable>
          </InputSlot>
        </Input>

        {/* Tombol Login */}
        <Button
          size="md"
          variant="solid"
          style={loginStyles.loginButton}
          onPress={handleLogin}
          disabled={loading}
        >
          <ButtonText style={loginStyles.loginButtonText}>
            {loading ? "Loading..." : "Masuk"}
          </ButtonText>
        </Button>

        {/* Buat Akun */}
        <Center>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text
              style={[
                loginStyles.linkText,
                { color: mode === "dark" ? "white" : "black" },
              ]}
            >
              Buat akun
            </Text>
          </TouchableOpacity>
        </Center>

        {/* Lupa Password */}
        <Center>
          <TouchableOpacity onPress={() => router.push("/forgot-password")}>
            <Text
              style={[
                loginStyles.linkText,
                { color: mode === "dark" ? "white" : "black" },
              ]}
            >
              Lupa Kata Sandi?
            </Text>
          </TouchableOpacity>
        </Center>
      </VStack>
    </SafeAreaView>
  );
}

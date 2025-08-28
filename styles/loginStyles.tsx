import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "800",
    fontFamily: "Lato",
    fontSize: 26,
    marginBottom: 40,
  },
  formWrapper: {
    width: "100%",
    gap: 20,
  },
  input: {
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 52,
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  loginButton: {
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#ffffff",
    fontFamily: "Lato",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotText: {
    fontFamily: "Lato",
    fontSize: 15,
    marginTop: 25,
  },

  linkText: {
    fontFamily: "Lato",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
});

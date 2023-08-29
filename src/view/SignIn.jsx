import { Formik } from "formik";
import Text from "../components/Text";
import FormikTextInput from "../components/FormikTextInput";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 5,
    borderRadius: 5,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 15,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.body,
    textAlign: "center",
  },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            style={styles.input}
            name="username"
            placeholder="Username"
          />
          <FormikTextInput
            style={styles.input}
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <Pressable onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;

import { Formik } from "formik";
import * as yup from "yup";
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
  borderError: {
    borderColor: theme.colors.error,
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

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignForm = ({ onSubmit, errors }) => {
  const userStyles = [styles.input, !!errors.username && styles.borderError];
  const passStyles = [styles.input, !!errors.password && styles.borderError];
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={userStyles}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        style={passStyles}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors }) => (
        <SignForm onSubmit={handleSubmit} errors={errors} />
      )}
    </Formik>
  );
};

export default SignIn;

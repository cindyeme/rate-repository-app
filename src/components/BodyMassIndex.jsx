import { Text, Pressable, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import FormikTextInput from "./FormikTextInput";

const initialValues = {
  mass: "",
  height: "",
};

const validationSchema = yup.object().shape({
  mass: yup
    .number()
    .min(1, "Weight must be greater or equal to 1")
    .required("Weight is required"),
  height: yup
    .number()
    .min(0.5, "Height must be greater or equal to 0.5")
    .required("Height is required"),
});

const getBodyMassIndex = (mass, height) => {
  return Math.round(mass / Math.pow(height, 2));
};

const BodyMassIndexForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="mass" placeholder="Weight (kg)" />
      <FormikTextInput name="height" placeholder="Height (m)" />
      <Pressable onPress={onSubmit}>
        <Text>Calculate</Text>
      </Pressable>
    </View>
  );
};

const BodyMassIndexCalculator = () => {
  const onSubmit = (values) => {
    const mass = parseFloat(values.mass);
    const height = parseFloat(values.height);

    if (!isNaN(mass) && !isNaN(height) && height !== 0) {
      console.log(`Your body mass index is: ${getBodyMassIndex(mass, height)}`);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <BodyMassIndexForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default BodyMassIndexCalculator;
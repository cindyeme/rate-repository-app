import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "../components/AppBar";
import theme from "../theme";
import SignIn from "./SignIn";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight || 0,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.bgColor,
  },
});

export default Main;

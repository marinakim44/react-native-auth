import { View, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onSubmitPressed = () => {
    navigation.navigate("Home")
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          name="code"
          placeholder="Code"
          control={control}
          rules={{ required: "Code is required" }}
        />
        <CustomInput
          name="new-password"
          placeholder="Enter new password"
          control={control}
          rules={{ required: "New password is required" }}
          secureTextEntry={true}
        />

        <CustomButton text="SUBMIT" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Back to sign in"
          type="TERTIARY"
          onPress={onSignInPressed}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
    marginTop: 50,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#fdb075",
  },
});

export default NewPasswordScreen;

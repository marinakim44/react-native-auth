import { View, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import {useForm} from "react-hook-form";

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onConfirmPress = (data) => {
    navigation.navigate("Home")
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn")
  };

  const onResendPressed = () => {
    console.warn("Resend code");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          name="code"
          placeholder="Enter confirmation code"
          control={control}
          rules={{required: "Code is required"}}
        />

        <CustomButton text="CONFIRM" onPress={handleSubmit(onConfirmPress)} />
        <CustomButton
          text="Resend code"
          type="SECONDARY"
          onPress={onResendPressed}
        />
        <CustomButton
          text="Already have an account? Sign in"
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

export default ConfirmEmailScreen;

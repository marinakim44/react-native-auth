import { View, StyleSheet, ScrollView, Text } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignupScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const onRegisterPressed = (data) => {
    navigation.navigate("ConfirmEmail");
  };

  const onTermsOfUsePressed = () => {
    navigation.navigate("TermsOfUse")
  };

  const onPrivacyPolicyPressed = () => {
    navigation.navigate("PrivacyPolicy")
  };

const onSigninPressed = () => {
  navigation.navigate("SignIn")
}

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username should be at least 3 characters",
            },
            maxLength: {
              value: 10,
              message: "Username should be maximum 10 characters",
            },
          }}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            pattern: { value: EMAIL_REGEX, message: "Invalid email format" },
          }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters",
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          placeholder="Confirm password"
          control={control}
          secureTextEntry={true}
          rules={{
            validate: (value) => value === pwd || "Passwords do not match",
          }}
        />
        <CustomButton
          text="REGISTER"
          onPress={handleSubmit(onRegisterPressed)}
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            {" "}
            Privacy Policy
          </Text>
        </Text>
        <CustomButton
          text="Already have an account? Sign in"
          onPress={onSigninPressed}
          type="TERTIARY"
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
    color: "#DB536A",
    margin: 10,
    marginTop: 50,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#DB536A",
  },
});

export default SignupScreen;

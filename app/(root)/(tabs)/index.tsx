import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import firstImg from "@/assets/images/onboarding.png";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Image source={firstImg} alt="onboarding image" /> */}
      <Text className="text-3xl font-bold my-10 font-rubik-light">Welcome to ReState</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}

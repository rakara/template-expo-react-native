import { Redirect, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "@/src/providers/AuthProvider";
export default function ProtectedLayout(){const {user,loading}=useAuth();if(loading)return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}><ActivityIndicator/></View>;if(!user)return <Redirect href="/sign-in"/>;return <Stack/>;}

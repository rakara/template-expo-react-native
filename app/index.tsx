import { ActivityIndicator, View } from "react-native";
import { Redirect } from "expo-router";
import { useAuth } from "@/src/providers/AuthProvider";
export default function IndexScreen(){const {user,loading}=useAuth();if(loading)return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}><ActivityIndicator/></View>;return <Redirect href={user?"/(app)":"/sign-in"}/>;}

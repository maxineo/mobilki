import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddCardScreen from "../screens/AddCardScreen";
import CRUDScreen from "../screens/CRUDScreen";
import EditCardScreen from "../screens/EditCardScreen";
import EngCardScreen from "../screens/EngCardScreen";
import RuCardScreen from "../screens/RuCardScreen";

const Stack = createNativeStackNavigator();

export default function CardsRoutes() {
  return (
    <Stack.Navigator initialRouteName="Cards">
      <Stack.Screen name="Cards" component={CRUDScreen} options={{headerShown: false, headerBackVisible: false}}/>
      <Stack.Screen name="EngCard" component={EngCardScreen} options={{headerShown: false, headerBackVisible: false}}/>
      <Stack.Screen name="RuCard" component={RuCardScreen} options={{headerShown: false, headerBackVisible: false}}/>
      <Stack.Screen name="AddCard" component={AddCardScreen} options={{headerShown: false, headerBackVisible: false}}/>
      <Stack.Screen name="EditCard" component={EditCardScreen} options={{headerShown: false, headerBackVisible: false}}/>
    </Stack.Navigator>
  )
}
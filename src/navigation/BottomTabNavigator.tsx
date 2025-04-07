import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TodoScreen from '@/screens/TodoScreen'
import TimerScreen from '@/screens/TimerScreen'
import CalendarScreen from '@/screens/CalendarScreen'
import SettingsScreen from '@/screens/SettingsScreen'

import TodoIcon from '@/assets/icons/navigation/bottom/todo.svg'
import TimerIcon from '@/assets/icons/navigation/bottom/timer.svg'
import CalendarIcon from '@/assets/icons/navigation/bottom/calendar.svg'
import SettingsIcon from '@/assets/icons/navigation/bottom/settings.svg'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          height: 80,
          paddingTop: 5,
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#aaa',
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="Todo"
        component={TodoScreen}
        options={{
          tabBarLabel: 'Todo',
          tabBarIcon: () => <TodoIcon width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Timer"
        component={TimerScreen}
        options={{
          tabBarLabel: 'Timer',
          tabBarIcon: () => <TimerIcon width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: () => <CalendarIcon width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => <SettingsIcon width={24} height={24} />,
        }}
      />
    </Tab.Navigator>
  )
}

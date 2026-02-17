import { Drawer } from 'expo-router/drawer'

const DrawerLayout = () => {
  return (
    <Drawer >
      <Drawer>
        <Drawer.Screen
          name="user/index"
          options={{
            drawerLabel: 'user',
            title: 'Usuario',
          }}
        />
        <Drawer.Screen
          name="schedule/index"
          options={{
            drawerLabel: 'Horario',
            title: 'Horario',
          }}
        />
      </Drawer>
    </Drawer>
  )
}

export default DrawerLayout
import { useState } from 'react'
import Layout from "./components/Layout.jsx";
import Tab from "./components/Tab.jsx";
import Tabs from "./components/Tabs.jsx";
import { restaurants } from "./materials/mock.js";
import Restaurant from "./components/Restaurant.jsx";

function App() {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id)

  return (
      <Layout>
          <Tabs>
              {restaurants.map(restaurant => (
                  <Tab
                      isActive={activeRestaurantId === restaurant.id}
                      key={restaurant.id}
                      onTabClick={() => setActiveRestaurantId(restaurant.id)}
                  >
                      {restaurant.name}
                  </Tab>
              ))}
          </Tabs>

          <Restaurant data={restaurants.find(restaurant=>
              restaurant.id === activeRestaurantId
          )}/>
      </Layout>
  )
}

export default App

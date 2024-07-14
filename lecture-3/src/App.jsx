import { useState } from 'react'
import Layout from "./components/Layout.jsx";
import Tab from "./components/Tab.jsx";
import Tabs from "./components/Tabs.jsx";
import TabContent from "./components/TabContent.jsx";
import TabsContainer from "./components/TabsContainer.jsx";
import { restaurants } from "./materials/mock.js";
import Restaurant from "./components/Restaurant.jsx";

function App() {
  const [activeTab, setActiveTab] = useState(restaurants[0].id)

  return (
      <Layout>
          <Tabs activeTab={activeTab} onTabsChange={tab => setActiveTab(tab)}>
              {restaurants.map(restaurant => (
                  <Tab value={restaurant.id} key={restaurant.id}>
                      {restaurant.name}
                  </Tab>
              ))}
          </Tabs>

          <TabsContainer activeTab={activeTab}>
              {restaurants.map(restaurant => (
                  <TabContent value={restaurant.id} key={restaurant.id}>
                      <Restaurant data={restaurant} />
                  </TabContent>
              ))}
          </TabsContainer>
      </Layout>
  )
}

export default App

import { Button } from '../components'
import { useNavigate } from 'react-router-dom'
import Breadcrumbheader from '../components/Breadcrumbheader'
import DisplayIncident from '../features/DisplayIncident'
import { useState } from 'react'
import ModelLayout from '../ui/ModelLayout'
import CreateLifeIncident from '../features/CreateLifeIncident'

const LifeIncident = () => {
  const navigate = useNavigate()
  const [showCreateLifeIncident, setshowCreateLifeIncident] = useState(false)

  const closeCreateLifeIncidentForm = (value) => {
    setshowCreateLifeIncident(value)
  }

  return (
    <div className="bg-slate-50  flex  h-screen ">
      <div className="  container mx-auto   ">
        <div className="mx-5 h-24 font-medium flex justify-between items-center">
          <Breadcrumbheader />
          <Button
            name={'Create Life Incident'}
            onClick={closeCreateLifeIncidentForm}
          />
          {showCreateLifeIncident && (
            <ModelLayout
              label="Create Life Incident"
              onClick={closeCreateLifeIncidentForm}
            >
              <CreateLifeIncident />
            </ModelLayout>
          )}
        </div>
        <DisplayIncident navigate={navigate} />
      </div>
    </div>
  )
}

export default LifeIncident

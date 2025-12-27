import { motion } from 'framer-motion'
import { StaffMember } from '../../data/staff'
import './StaffCard.css'

interface StaffCardProps {
  member: StaffMember
}

const StaffCard = ({ member }: StaffCardProps) => {
  return (
    <motion.div
      className="staff-card"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="staff-card-image-container">
        <img
          src={member.photo}
          alt={`${member.prenom} ${member.nom}`}
          className="staff-card-image"
          loading="lazy"
        />
        <div className="staff-card-text-overlay">
          <div className="staff-card-text-content">
            <h3 className="staff-card-name-overlay">
              {member.prenom} {member.nom}
            </h3>
            <p className="staff-card-poste-overlay">{member.poste}</p>
            {member.bio && (
              <p className="staff-card-bio-overlay">{member.bio}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default StaffCard


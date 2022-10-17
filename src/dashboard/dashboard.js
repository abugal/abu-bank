import styles from './dashboard.module.css'
import { useNavigate } from 'react-router-dom'

export function Dashboard() {
    const navigate = useNavigate()
    return (
        <div className={styles.dashCont}>
            <div onClick={() => navigate('/NewCustomer')}>
                New Customer
            </div>
            <div onClick={() => navigate('/deposit')}>
                Deposit
            </div>
            <div onClick={() => navigate('/withdraw')}>
                Withdrawals
            </div>
            <div onClick={() => navigate('/transfer')}>
                Transfer
            </div>
            <div onClick={() => navigate('/balance')}>
                Balance
            </div>
            <div onClick={() => navigate('/nav')}>
                My Nav-Bar
            </div>
        </div>
    )
}
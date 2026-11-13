import { Heart } from 'lucide-react'
import { useApp } from '../context/AppContext'
function SaveButton() { 
    const { saved, toggleSaved } = useApp(); 
    return <button className={saved ? 'save-btn is-saved' : 'save-btn'} 
    onClick={toggleSaved}><Heart size={16} fill={saved ? 'currentColor' : 'none'}/>
    {saved ? 'Saved to your list' : 'Save for later'}</button> }

export default SaveButton


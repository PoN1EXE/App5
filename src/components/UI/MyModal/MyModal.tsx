import cl from './MyModal.module.scss'
import type { MouseEvent } from 'react'
import type { ReactNode } from 'react'

interface MyModalProps {
  children: ReactNode
  visible: boolean
  setVisible: (value: boolean) => void
}

export const MyModal = ({ children, visible, setVisible }: MyModalProps) => {
  const rootClasses = [cl.myModal]
  if (visible) {
    rootClasses.push(cl.active)
  }

  const handleBackgroundClick = () => {
    setVisible(false)
  }

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div className={rootClasses.join(' ')} onClick={handleBackgroundClick}>
      <div className={cl.myModalContent} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  )
}

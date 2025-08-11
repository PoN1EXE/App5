import cl from './MyModal.module.scss'
import clsx from 'clsx'
import type { MouseEvent, ReactNode } from 'react'

interface MyModalProps {
  children: ReactNode
  visible: boolean
  setVisible: (value: boolean) => void
}

export const MyModal = ({ children, visible, setVisible }: MyModalProps) => {
  const rootClasses = clsx(cl.myModal, {
    [cl.active]: visible,
  })

  const handleBackgroundClick = () => {
    setVisible(false)
  }

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div className={rootClasses} onClick={handleBackgroundClick}>
      <div className={cl.myModalContent} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  )
}

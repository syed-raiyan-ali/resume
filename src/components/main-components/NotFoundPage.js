import React from 'react';
import './NotFoundPage.css';
import { NoPage } from "../NoPage"
import { ThemeProvider } from '../ThemeProvider'

export const NotFoundPage = () => {

  console.log('notfoundpage.js')

  return (
    <ThemeProvider>
      <div className="outer">
        <NoPage />
      </div>
    </ThemeProvider>
  )
}
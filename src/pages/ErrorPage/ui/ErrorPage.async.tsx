import { lazy } from 'react'

export const ErrorPageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import('./ErrorPage')), 1500)
    })
)

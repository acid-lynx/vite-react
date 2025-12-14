import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from "@/app/providers/router/router";
import { ThemeProvider } from '@/widgets/ThemeSwitcher'
import { Loader } from "@/widgets/Loader";

const root = createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider>
    <Suspense fallback={ <Loader/> }>
      <RouterProvider router={ router }/>
    </Suspense>
  </ThemeProvider>
)
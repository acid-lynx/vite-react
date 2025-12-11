import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import router from "@/app/providers/router/router";
import { ThemeProvider } from '@/app/providers/ThemeProvider'

const root = createRoot(document.getElementById('root'))
root.render(
    <Suspense fallback={ <div>Loading...</div> }>
        <ThemeProvider>
            <RouterProvider router={ router }/>
        </ThemeProvider>
    </Suspense>
)
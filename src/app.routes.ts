import { Routes } from '@angular/router';
import { AppLayout } from '@/layout/components/app.layout';
import { Notfound } from '@/pages/notfound/notfound';
import { LandingLayout } from '@/layout/components/app.landinglayout';
import { AuthLayout } from '@/layout/components/app.authlayout';
import { Warehouse } from '@/pages/warehouse/warehouse';

export const appRoutes: Routes = [
    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                loadComponent: () => import('@/pages/auth/login').then((c) => c.Login)
            },
            {
                path: 'register',
                loadComponent: () => import('@/pages/auth/register').then((c) => c.Register)
            },
            {
                path: 'verification',
                loadComponent: () => import('@/pages/auth/verification').then((c) => c.Verification)
            },
            {
                path: 'forgot-password',
                loadComponent: () => import('@/pages/auth/forgotpassword').then((c) => c.ForgotPassword)
            },
            {
                path: 'new-password',
                loadComponent: () => import('@/pages/auth/newpassword').then((c) => c.NewPassword)
            },
            {
                path: 'lock-screen',
                loadComponent: () => import('@/pages/auth/lockscreen').then((c) => c.LockScreen)
            },
            {
                path: 'access',
                loadComponent: () => import('@/pages/auth/access').then((c) => c.Access)
            },
            {
                path: 'oops',
                loadComponent: () => import('@/pages/oops/oops').then((c) => c.Oops)
            },
            {
                path: 'error',
                loadComponent: () => import('@/pages/notfound/notfound').then((c) => c.Notfound)
            }
        ]
    },
    {
        path: 'landing',
        component: LandingLayout,
        children: [
            {
                path: '',
                loadComponent: () => import('@/pages/landing/landingpage').then((c) => c.LandingPage)
            },
            {
                path: 'features',
                loadComponent: () => import('@/pages/landing/featurespage').then((c) => c.FeaturesPage)
            },
            {
                path: 'pricing',
                loadComponent: () => import('@/pages/landing/pricingpage').then((c) => c.PricingPage)
            },
            {
                path: 'contact',
                loadComponent: () => import('@/pages/landing/contactpage').then((c) => c.ContactPage)
            }
        ]
    },
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: '',
                redirectTo: 'user-data',
                pathMatch: 'full'
            },
            {
                path: 'user-create',
                loadComponent: () => import('@/pages/user-create/user-create').then((c) => c.UserCreate),
                data: { breadcrumb: 'User Data' }
            },
            {
                path: 'my-orders',
                loadComponent: () => import('@/pages/my-orders/my-orders').then((c) => c.MyOrders),
                data: { breadcrumb: 'User Data' }
            },
            {
                path: 'user-data',
                loadComponent: () => import('@/pages/usermanagement/user-data').then((c) => c.UserData),
                data: { breadcrumb: 'User Data' }
            },
            {
                path: 'warehouse',
                loadComponent: () => import('@/pages/warehouse/warehouse').then((c) => c.Warehouse),
                data: { breadcrumb: 'warehouse' }
            },
            {
                path: 'ecommerce',
                loadComponent: () => import('@/pages/dashboards/ecommerce/ecommercedashboard').then((c) => c.EcommerceDashboard),
                data: { breadcrumb: 'E-Commerce Dashboard' }
            },
            {
                path: 'banking',
                loadComponent: () => import('@/pages/dashboards/banking/bankingdashboard').then((c) => c.BankingDashboard),
                data: { breadcrumb: 'Banking Dashboard' }
            },
            {
                path: 'marketing',
                loadComponent: () => import('@/pages/dashboards/marketing/marketingdashboard').then((c) => c.MarketingDashboard),
                data: { breadcrumb: 'Marketing Dashboard' }
            },
            {
                path: 'uikit',
                data: { breadcrumb: 'UI Kit' },
                loadChildren: () => import('@/pages/uikit/uikit.routes')
            },
            {
                path: 'documentation',
                data: { breadcrumb: 'Documentation' },
                loadComponent: () => import('@/pages/documentation/documentation').then((c) => c.Documentation)
            },
            {
                path: 'pages',
                loadChildren: () => import('@/pages/pages.routes'),
                data: { breadcrumb: 'Pages' }
            },
            {
                path: 'apps',
                loadChildren: () => import('@/apps/apps.routes'),
                data: { breadcrumb: 'Apps' }
            },
            {
                path: 'blocks',
                data: { breadcrumb: 'Free Blocks' },
                loadChildren: () => import('@/pages/blocks/blocks.routes')
            },
            {
                path: 'ecommerce',
                loadChildren: () => import('@/pages/ecommerce/ecommerce.routes'),
                data: { breadcrumb: 'E-Commerce' }
            },
            {
                path: 'profile',
                loadChildren: () => import('@/pages/usermanagement/usermanagement.routes')
            }
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];

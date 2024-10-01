
import { clipboardOutline, createOutline, eyeOffOutline, fileTrayFullOutline, fileTrayStackedOutline, helpCircleOutline, hourglassOutline, medalOutline, personOutline, ribbonOutline, settingsOutline, swapHorizontalOutline } from 'ionicons/icons';
export const accountItems = [
    {
        title: 'My Account',
        items: [
            { label: 'Account Information', icon: personOutline, color : "#177D54" },
            { label: 'Active Plans', icon: clipboardOutline, color : "#0185FF"  },
            { label: 'Certificate of Full Payment', icon: ribbonOutline, color : "#FFD700"  },
            { label: 'Manage My Plan', icon: createOutline, color : "#177D54"  },
            { label: 'Application Status', icon: hourglassOutline, color : "#FF5858"  },
            { label: 'Transaction History', icon: fileTrayStackedOutline, color : "#1C274C"  },
        ]
    },
    {
        title: 'General',
        items: [
            { label: 'Settings', icon: settingsOutline, color : "#323232"  },
            { label: 'Help Center', icon: helpCircleOutline, color : "#177D54"  },
            { label: 'Recently Viewed' , icon: eyeOffOutline, color : "#0185FF" },
            { label: 'Switch Account' , icon: swapHorizontalOutline, color : "#FF5858" },
        ]
    },

]
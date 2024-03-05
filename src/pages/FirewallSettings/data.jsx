export const firewallModes = [
    {
        value: 'allow',
        title: 'Allow all',
        desc: 'Allows all network traffic',
        selected: false
    },
    {
        value: 'learning',
        title: 'Learning mode',
        desc: 'Filters network traffic only for SMTP protocol, and allow all the other connections',
        selected: true,
        recommend: true
    },
    {
        value: 'filter',
        title: 'Filter mode ask unknown',
        desc: 'Filters network traffic only for rules defined and ask for unknown connections',
        selected: false
    },
    {
        value: 'admin',
        title: 'Admin mode don\'t ask unknown',
        desc: 'Filters network traffic only for rules defined and don\'t ask for unknown connections',
        selected: false
    },
    {
        value: 'block',
        title: 'Block all',
        desc: 'Blocks all network traffic',
        selected: false
    },
]

export const otherSettings = [
    {
        value: 'outgoing_rule',
        title: 'Enable outgoing rule',
        enabled: true
    },
    {
        value: 'incoming_rule',
        title: 'Enable incoming rule',
        enabled: true
    },
    {
        value: 'outgoing_admin_alert',
        title: 'Show outgoing admin mode alert',
        enabled: true
    },
    {
        value: 'incoming_admin_alert',
        title: 'Show incoming admin mode alert',
        enabled: true
    },
    {
        value: 'action_after_timeout',
        title: 'Default action after alert timeout',
        enabled: true
    },
    {
        value: 'outgoing_log',
        title: 'Enable outgoing log',
        enabled: true
    },
    {
        value: 'incoming_log',
        title: 'Enable incoming rule',
        enabled: true
    },
]

export const firewallModes = [
    {
        value: 'allow',
        title: 'Allow all',
        desc: 'Allows all network traffic',
    },
    {
        value: 'learning',
        title: 'Learning mode',
        desc: 'Filters network traffic only for SMTP protocol, and allow all the other connections',
        recommend: true
    },
    {
        value: 'filter',
        title: 'Filter mode ask unknown',
        desc: 'Filters network traffic only for rules defined and ask for unknown connections',
    },
    {
        value: 'admin',
        title: 'Admin mode don\'t ask unknown',
        desc: 'Filters network traffic only for rules defined and don\'t ask for unknown connections',
    },
    {
        value: 'block',
        title: 'Block all',
        desc: 'Blocks all network traffic',
    },
]

export const otherSettings = [
    {
        value: 'outgoing_rule',
        title: 'Enable outgoing rule',
    },
    {
        value: 'incoming_rule',
        title: 'Enable incoming rule',
    },
    {
        value: 'outgoing_admin_alert',
        title: 'Show outgoing admin mode alert',
    },
    {
        value: 'incoming_admin_alert',
        title: 'Show incoming admin mode alert',
    },
    {
        value: 'action_after_timeout',
        title: 'Default action after alert timeout',
    },
    {
        value: 'outgoing_log',
        title: 'Enable outgoing log',
    },
    {
        value: 'incoming_log',
        title: 'Enable incoming rule',
    },
]

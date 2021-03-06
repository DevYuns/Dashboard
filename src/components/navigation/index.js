
import React from 'react';
import Dashboard from '../../screens/Dashboard';

export const MessageScreen = ({navigation}) => <Dashboard navigation={navigation} name='Message' />
export const ListScreen = ({navigation}) => <Dashboard navigation={navigation} name='List' />
export const ReportScreen = ({navigation}) => <Dashboard navigation={navigation} name='Report' />
export const StatisticScreen = ({navigation}) => <Dashboard navigation={navigation} name='Statistic' />
export const MailScreen = ({navigation}) => <Dashboard navigation={navigation} name='Mail' />
export const LogoutScreen = ({navigation}) => <Dashboard navigation={navigation} name='Logout' />
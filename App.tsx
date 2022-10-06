import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { AuthenticatedUserProvider } from './providers';
import { RootNavigator } from './navigation/RootNavigator';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthenticatedUserProvider>
        {/* <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider> */}
        <SafeAreaProvider>
          <RootNavigator/>
        </SafeAreaProvider>
      </AuthenticatedUserProvider>
    );
  }
}

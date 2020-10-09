export const TabNavigator = () => {
  return (
    <Tab.Navigator headerMode="none">
      <Tab.Screen
        name={NAVIGATION_TO_HOME_SCREEN}
        // name="homepage"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name={NAVIGATION_TO_MARKET_PRICE_SCREEN}
        component={MarketPrice}
        options={{
          tabBarIcon: () => <MarketIcon />,
        }}
      />
      <Tab.Screen
        name={NAVIGATION_TO_WEATHER_SCREEN}
        component={WeatherScreen}
        options={{
          tabBarIcon: () => <WeatherIcon />,
        }}
      />
      <Tab.Screen
        name={NAVIGATION_TO_VIDEO_SCREEN}
        component={VideoScreen}
        options={{
          tabBarIcon: () => <VideoIcon />,
        }}
      />
      <Tab.Screen
        name={NAVIGATION_TO_BLOG_SCREEN}
        component={BlogScreen}
        options={{
          tabBarIcon: () => <BlogIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

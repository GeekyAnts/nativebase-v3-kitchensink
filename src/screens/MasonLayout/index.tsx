import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useBreakpointValue } from 'native-base';
import { ScrollView } from 'react-native';
import { MasonaryLayout } from '../../components/MasonLayout/MasonaryLayout';
import { StoryBook } from '../../components/StoryBook';
import { Layout } from '../../components/Layout';

export function MasonLayout({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <MasonaryLayout
          column={useBreakpointValue({
            base: [1, 1],
            sm: [1, 1],
            md: [1, 1, 1],
            // lg: [1, 1, 1, 1],
            // xl: [1, 1, 1, 1, 1],
          })}
          _hStack={{
            space: 4,
            mb: 4,
            pt: '70px',
          }}
          _vStack={{ space: 4 }}
        >
          <StoryBook
            navigation={navigation}
            name="Actionsheet"
            minH={32}
            _box={{
              lightGrad: ['cyan.400', 'teal.200'],
              darkGrad: ['cyan.600', 'teal.300'],
            }}
            _heading={{
              color: 'amber.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Alert"
            minH={40}
            _box={{
              lightGrad: ['orange.400', 'amber.200'],
              darkGrad: ['orange.600', 'amber.300'],
            }}
            _heading={{
              color: 'amber.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="AlertDialog"
            minH={48}
            _box={{
              lightGrad: ['blue.800', 'lightBlue.300'],
              darkGrad: ['blue.900', 'lightBlue.500'],
            }}
            _heading={{
              color: 'amber.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Avatar"
            minH={48}
            _box={{
              lightGrad: ['violet.800', 'lightBlue.300'],
              darkGrad: ['violet.900', 'lightBlue.500'],
            }}
            _heading={{
              color: 'lightBlue.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Badge"
            minH={32}
            _box={{
              lightGrad: ['emerald.400', 'lime.200'],
              darkGrad: ['emerald.600', 'lime.300'],
            }}
            _heading={{
              color: 'lime.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Box"
            minH={40}
            _box={{
              lightGrad: ['fuchsia.800', 'pink.300'],
              darkGrad: ['fuchsia.900', 'pink.500'],
            }}
            _heading={{
              color: 'pink.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="Button"
            minH={40}
            _box={{
              lightGrad: ['lightBlue.400', 'cyan.200'],
              darkGrad: ['lightBlue.600', 'cyan.300'],
            }}
            _heading={{
              color: 'cyan.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="Center"
            minH={40}
            _box={{
              lightGrad: ['cyan.300', 'yellow.200'],
              darkGrad: ['cyan.400', 'yellow.300'],
            }}
            _heading={{
              color: 'yellow.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="CheckBox"
            minH={32}
            _box={{
              lightGrad: ['rose.400', 'red.200'],
              darkGrad: ['rose.600', 'red.300'],
            }}
            _heading={{
              color: 'red.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="Column"
            minH={32}
            _box={{
              lightGrad: ['orange.400', 'yellow.200'],
              darkGrad: ['orange.600', 'yellow.300'],
            }}
            _heading={{
              color: 'red.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Divider"
            minH={40}
            _box={{
              lightGrad: ['fuchsia.400', 'violet.200'],
              darkGrad: ['fuchsia.600', 'violet.300'],
            }}
            _heading={{
              color: 'violet.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Fab"
            minH={40}
            _box={{
              lightGrad: ['green.400', 'lime.200'],
              darkGrad: ['green.600', 'lime.300'],
            }}
            _heading={{
              color: 'lime.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="FlatList"
            minH={24}
            _box={{
              lightGrad: ['darkBlue.400', 'indigo.200'],
              darkGrad: ['darkBlue.600', 'indigo.300'],
            }}
            _heading={{
              color: 'teal.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Flex"
            minH={32}
            _box={{
              lightGrad: ['cyan.400', 'teal.200'],
              darkGrad: ['cyan.600', 'teal.300'],
            }}
            _heading={{
              color: 'teal.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="FormControl"
            minH={56}
            _box={{
              lightGrad: ['lightBlue.400', 'cyan.200'],
              darkGrad: ['lightBlue.600', 'cyan.300'],
            }}
            _heading={{
              color: 'cyan.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Heading"
            minH={32}
            _box={{
              lightGrad: ['teal.400', 'violet.200'],
              darkGrad: ['teal.600', 'violet.300'],
            }}
            _heading={{
              color: 'violet.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="HStack"
            minH={32}
            _box={{
              lightGrad: ['orange.400', 'yellow.200'],
              darkGrad: ['orange.600', 'yellow.300'],
            }}
            _heading={{
              color: 'red.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="Icon"
            minH={32}
            _box={{
              lightGrad: ['rose.400', 'red.200'],
              darkGrad: ['rose.600', 'red.300'],
            }}
            _heading={{
              color: 'red.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="IconButton"
            minH={32}
            _box={{
              lightGrad: ['blue.800', 'lightBlue.300'],
              darkGrad: ['blue.900', 'lightBlue.500'],
            }}
            _heading={{
              color: 'lightBlue.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Image"
            minH={48}
            _box={{
              lightGrad: ['emerald.400', 'lime.200'],
              darkGrad: ['emerald.600', 'lime.300'],
            }}
            _heading={{
              color: 'lime.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Input"
            minH={32}
            _box={{
              lightGrad: ['emerald.400', 'teal.200'],
              darkGrad: ['emerald.600', 'teal.300'],
            }}
            _heading={{
              color: 'teal.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="KeyboardAvoidingView"
            minH={32}
            _box={{
              lightGrad: ['cyan.400', 'teal.200'],
              darkGrad: ['cyan.600', 'teal.300'],
            }}
            _heading={{
              color: 'lime.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Link"
            minH={24}
            _box={{
              lightGrad: ['rose.400', 'orange.300'],
              darkGrad: ['rose.600', 'orange.400'],
            }}
            _heading={{
              color: 'orange.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Menu"
            minH={64}
            _box={{
              lightGrad: ['cyan.300', 'yellow.200'],
              darkGrad: ['cyan.400', 'yellow.300'],
            }}
            _heading={{
              color: 'yellow.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="Modal"
            minH={48}
            _box={{
              lightGrad: ['indigo.400', 'red.200'],
              darkGrad: ['indigo.500', 'red.200'],
            }}
            _heading={{
              color: 'red.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Tabs"
            minH={40}
            _box={{
              lightGrad: ['violet.400', 'fuchsia.200'],
              darkGrad: ['violet.600', 'fuchsia.300'],
            }}
            _heading={{
              color: 'red.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="Popover"
            minH={48}
            _box={{
              lightGrad: ['darkBlue.400', 'blue.200'],
              darkGrad: ['darkBlue.600', 'blue.300'],
            }}
            _heading={{
              color: 'blue.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Pressable"
            minH={40}
            _box={{
              lightGrad: ['green.400', 'lime.200'],
              darkGrad: ['green.600', 'lime.300'],
            }}
            _heading={{
              color: 'lime.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Progress"
            minH={24}
            _box={{
              lightGrad: ['darkBlue.400', 'teal.200'],
              darkGrad: ['darkBlue.600', 'teal.300'],
            }}
            _heading={{
              color: 'teal.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Radio"
            minH={40}
            _box={{
              lightGrad: ['orange.400', 'amber.200'],
              darkGrad: ['orange.600', 'amber.300'],
            }}
            _heading={{
              color: 'amber.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="ScrollView"
            minH={32}
            _box={{
              lightGrad: ['indigo.400', 'red.200'],
              darkGrad: ['indigo.500', 'red.200'],
            }}
            _heading={{
              color: 'red.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="SectionList"
            minH={56}
            _box={{
              lightGrad: ['violet.400', 'fuchsia.200'],
              darkGrad: ['violet.600', 'fuchsia.300'],
            }}
            _heading={{
              color: 'yellow.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Select"
            minH={32}
            _box={{
              lightGrad: ['lightBlue.400', 'cyan.200'],
              darkGrad: ['lightBlue.600', 'cyan.300'],
            }}
            _heading={{
              color: 'red.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Slider"
            minH={24}
            _box={{
              lightGrad: ['fuchsia.400', 'pink.200'],
              darkGrad: ['fuchsia.600', 'pink.300'],
            }}
            _heading={{
              color: 'pink.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="Spinner"
            minH={32}
            _box={{
              lightGrad: ['green.400', 'yellow.200'],
              darkGrad: ['green.600', 'yellow.300'],
            }}
            _heading={{
              color: 'yellow.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Stack"
            minH={40}
            _box={{
              lightGrad: ['purple.400', 'red.200'],
              darkGrad: ['purple.600', 'red.300'],
            }}
            _heading={{
              color: 'cyan.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Switch"
            minH={32}
            _box={{
              lightGrad: ['cyan.300', 'yellow.200'],
              darkGrad: ['cyan.400', 'yellow.300'],
            }}
            _heading={{
              color: 'cyan.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Text"
            minH={32}
            _box={{
              lightGrad: ['rose.400', 'orange.300'],
              darkGrad: ['rose.600', 'orange.400'],
            }}
            _heading={{
              color: 'orange.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="TextArea"
            minH={40}
            _box={{
              lightGrad: ['teal.400', 'lime.200'],
              darkGrad: ['teal.600', 'lime.300'],
            }}
            _heading={{
              color: 'lime.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="Toast"
            minH={32}
            _box={{
              lightGrad: ['darkBlue.400', 'indigo.200'],
              darkGrad: ['darkBlue.600', 'indigo.300'],
            }}
            _heading={{
              color: 'indigo.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Tooltip"
            minH={40}
            _box={{
              lightGrad: ['violet.400', 'fuchsia.200'],
              darkGrad: ['violet.600', 'fuchsia.300'],
            }}
            _heading={{
              color: 'fuchsia.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="Transitions"
            minH={48}
            _box={{
              lightGrad: ['amber.400', 'yellow.200'],
              darkGrad: ['amber.600', 'yellow.300'],
            }}
            _heading={{
              color: 'yellow.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="View"
            minH={40}
            _box={{
              lightGrad: ['blue.800', 'lightBlue.300'],
              darkGrad: ['blue.900', 'lightBlue.500'],
            }}
            _heading={{
              color: 'red.100',
            }}
          />
          <StoryBook
            navigation={navigation}
            name="VStack"
            minH={40}
            _box={{
              lightGrad: ['rose.400', 'red.200'],
              darkGrad: ['rose.600', 'red.300'],
            }}
            _heading={{
              color: 'red.100',
            }}
          />

          <StoryBook
            navigation={navigation}
            name="ZStack"
            // flex={4}
            minH={48}
            _box={{
              lightGrad: ['cyan.400', 'lightBlue.200'],
              darkGrad: ['cyan.600', 'lightBlue.300'],
            }}
            _heading={{
              color: 'lightBlue.100',
            }}
          />
        </MasonaryLayout>
      </ScrollView>
    </Layout>
  );
}

import React from 'react';
import {View, Text, ScrollView, Image, SafeAreaView} from 'react-native';
import TabHead from './TabHead';
import KnowledgeBitesCard from './KnowledgeBitesCard';

const KnowledgeBites = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TabHead title="Knowledge Bites" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1, padding: 12}}>
          {/*  */}
          <KnowledgeBitesCard footer="Moving from knowledge to wisdom">
            <Image
              source={require(`../../assets/knowledge-bit/knowledge_info6.jpg`)}
              style={{height: 180, borderTopLeftRadius: 12}}
            />
          </KnowledgeBitesCard>
          {/*  */}
          <KnowledgeBitesCard footer="Now that you have the chance: take some 'Me Time'">
            <Image
              source={require(`../../assets/knowledge-bit/knowledge_info5.jpg`)}
              style={{height: 180, borderTopLeftRadius: 12}}
            />
          </KnowledgeBitesCard>
          {/*  */}
          <KnowledgeBitesCard footer="The answer is de-sensitise! ...De-what?!">
            <Image
              source={require(`../../assets/knowledge-bit/knowledge_info4.jpg`)}
              style={{height: 180, borderTopLeftRadius: 12}}
            />
          </KnowledgeBitesCard>
          {/*  */}
          <KnowledgeBitesCard footer="You are hooked!">
            <Image
              source={require(`../../assets/knowledge-bit/knowledge_info3.jpg`)}
              style={{height: 180, borderTopLeftRadius: 12}}
            />
          </KnowledgeBitesCard>
          {/*  */}
          <KnowledgeBitesCard footer="Sorry I was distracted...you were saying?">
            <Image
              source={require(`../../assets/knowledge-bit/knowledge_info2.jpg`)}
              style={{height: 180, borderTopLeftRadius: 12}}
            />
          </KnowledgeBitesCard>
          {/*  */}
          <KnowledgeBitesCard footer="It's all about attitude">
            <Image
              source={require(`../../assets/knowledge-bit/knowledge_info.jpg`)}
              style={{height: 180, borderTopLeftRadius: 12}}
            />
          </KnowledgeBitesCard>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default KnowledgeBites;

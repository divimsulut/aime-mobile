import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Header } from "../../../components";

const Profile_PP = ({ navigation }) => {
  return (
    <View>
      <Header
        label="Privacy Policy"
        navigation={navigation}
        color="black"
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView>
            <Text style={styles.H2}>1. Types data we collect</Text>
            <Text style={styles.ParagraphLong}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </Text>

            <Text style={styles.H2}>2. Use of your personal data</Text>
            <Text style={styles.ParagraphLong}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </Text>

            <Text style={styles.H2}>3. Disclosure of your personal data</Text>
            <Text style={styles.ParagraphLong}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Profile_PP;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // fontFamily: 'Poppins',
    // fontWeight: 100,
  },
  content: {
    padding: 15,
    marginTop: 40,
  },
  H2: {
    fontSize: 18,
    color: "black",
    marginTop: 30,
    marginBottom: 10,
    fontWeight: "bold",
    // marginLeft: 10,
  },
  ParagraphLong: {
    fontSize: 15,
    color: "#606060",
  },
});

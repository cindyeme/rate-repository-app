import { FlatList, View, StyleSheet, Image } from "react-native";
import { repositories } from "../constants";
import theme from "../theme";
import Text from "../components/Text";

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const formatCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    }
    return count.toString();
  };
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <View style={styles.repoContainer}>
          <View style={styles.content}>
            <Image
              source={{
                uri: item.ownerAvatarUrl,
              }}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text} fontWeight="bold" fontSize="subheading">
                {item.fullName}
              </Text>
              <Text style={styles.text} fontSize="body">
                {item.description}
              </Text>
              <View style={styles.chip}>
                <Text style={styles.chipText}>{item.language}</Text>
              </View>
            </View>
          </View>
          <View style={styles.countContainer}>
            <View style={styles.count}>
              <Text style={styles.text} fontWeight="bold" fontSize="subheading">
                {formatCount(item.stargazersCount)}
              </Text>
              <Text style={styles.text} fontSize="body">
                Stars
              </Text>
            </View>
            <View style={styles.count}>
              <Text style={styles.text} fontWeight="bold" fontSize="subheading">
                {formatCount(item.forksCount)}
              </Text>
              <Text style={styles.text} fontSize="body">
                Forks
              </Text>
            </View>
            <View style={styles.count}>
              <Text style={styles.text} fontWeight="bold" fontSize="subheading">
                {item.reviewCount}
              </Text>
              <Text style={styles.text} fontSize="body">
                Reviews
              </Text>
            </View>
            <View style={styles.count}>
              <Text style={styles.text} fontWeight="bold" fontSize="subheading">
                {item.ratingAverage}
              </Text>
              <Text style={styles.text} fontSize="body">
                Rating
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  repoContainer: {
    backgroundColor: theme.colors.white,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  content: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  countContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  count: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  text: { marginBottom: 5 },
  chip: {
    backgroundColor: theme.colors.chipColor,
    paddingVertical: 5,
    borderRadius: 5,
    width: 75,
    marginVertical: 5,
  },
  chipText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.small,
    textAlign: "center",
  },
});

export default RepositoryList;

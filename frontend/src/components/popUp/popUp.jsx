import { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View, Image } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

const PopUpDialog = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const paymentId = searchParams.get("paymentId");

    if (paymentId) {
      setShowModal(true);
      searchParams.delete("paymentId");
      window.history.replaceState(null, "", `?${searchParams.toString()}`);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Modal
        visible={showModal}
        animationType="fade"
        onRequestClose={handleModalClose}
        transparent={true}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Congratulations!</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "assets/images/payment/online-payment-successful.svg",
                  }}
                />
              </View>
              <Text style={styles.contentText}>
                You have completed your payment successfully.
              </Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleModalClose}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default PopUpDialog;
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d3436",
    marginLeft: 10,
  },
  content: {
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentText: {
    fontSize: 20,
    textAlign: "center",
    color: "#2d3436",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#00b894",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
};

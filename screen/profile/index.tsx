import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
  Switch,
} from "react-native";
import { Text, View } from "@/components/Themed";
import {
  Ionicons,
  MaterialIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { profileStyles } from "@/styles/profileStyles";
import { router } from "expo-router";

type MenuItemProps = {
  icon: string;
  iconFamily: "Ionicons" | "MaterialIcons" | "Feather" | "AntDesign";
  title: string;
  onPress?: () => void;
  hasSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  showChevron?: boolean;
  danger?: boolean;
};

type InfoCardProps = {
  icon: string;
  iconFamily: "Ionicons" | "MaterialIcons" | "Feather";
  text: string;
  onPress?: () => void;
};

const ProfileScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const userInfo = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    joinDate: "Bergabung sejak Januari 2023",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    verified: true,
  };

  const handleEditProfile = () => {
    Alert.alert("Edit Profile", "Navigasi ke halaman edit profile");
  };

  const handleChangePassword = () => {
    Alert.alert("Ubah Password", "Navigasi ke halaman ubah password");
  };

  const handlePrivacySecurity = () => {
    Alert.alert("Privasi & Keamanan", "Navigasi ke pengaturan privasi");
  };

  const handleHelp = () => {
    Alert.alert("Bantuan", "Navigasi ke halaman bantuan dan FAQ");
  };

  const handleAbout = () => {
    Alert.alert("Tentang Aplikasi", "Informasi tentang aplikasi dan developer");
  };

  const handleLogout = () => {
    Alert.alert("Keluar", "Apakah Anda yakin ingin keluar dari akun?", [
      { text: "Batal", style: "cancel" },
      {
        text: "Keluar",
        style: "destructive",
        onPress: () => {
          router.push("/login");
          console.log("User logged out");
        },
      },
    ]);
  };

  const ProfileHeader = () => (
    <View style={profileStyles.headerContainer}>
      <View style={profileStyles.avatarContainer}>
        <Image source={{ uri: userInfo.avatar }} style={profileStyles.avatar} />
        <TouchableOpacity style={profileStyles.editAvatarButton}>
          <Ionicons name="camera" size={18} color="#FFF" />
        </TouchableOpacity>
        {userInfo.verified && (
          <View style={profileStyles.verifiedBadge}>
            <MaterialIcons name="verified" size={20} color="#1DA1F2" />
          </View>
        )}
      </View>
      <Text style={profileStyles.userName}>{userInfo.name}</Text>
      <Text style={profileStyles.joinDate}>{userInfo.joinDate}</Text>
    </View>
  );

  const InfoCard: React.FC<InfoCardProps> = ({
    icon,
    iconFamily,
    text,
    onPress,
  }) => (
    <TouchableOpacity style={profileStyles.infoCard} onPress={onPress}>
      <View style={profileStyles.infoCardContent}>
        {iconFamily === "Ionicons" && (
          <Ionicons name={icon} size={20} color="#666" />
        )}
        {iconFamily === "MaterialIcons" && (
          <MaterialIcons name={icon} size={20} color="#666" />
        )}
        {iconFamily === "Feather" && (
          <Feather name={icon} size={20} color="#666" />
        )}
        <Text style={profileStyles.infoText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  const MenuItem: React.FC<MenuItemProps> = ({
    icon,
    iconFamily,
    title,
    onPress,
    hasSwitch,
    switchValue,
    onSwitchChange,
    showChevron = true,
    danger = false,
  }) => (
    <TouchableOpacity
      style={[profileStyles.menuItem, danger && profileStyles.dangerMenuItem]}
      onPress={onPress}
    >
      <View style={profileStyles.menuItemLeft}>
        <View
          style={[
            profileStyles.menuIconContainer,
            danger && profileStyles.dangerIconContainer,
          ]}
        >
          {iconFamily === "Ionicons" && (
            <Ionicons
              name={icon}
              size={22}
              color={danger ? "#FF3B30" : "#666"}
            />
          )}
          {iconFamily === "MaterialIcons" && (
            <MaterialIcons
              name={icon}
              size={22}
              color={danger ? "#FF3B30" : "#666"}
            />
          )}
          {iconFamily === "Feather" && (
            <Feather
              name={icon}
              size={22}
              color={danger ? "#FF3B30" : "#666"}
            />
          )}
          {iconFamily === "AntDesign" && (
            <AntDesign
              name={icon}
              size={22}
              color={danger ? "#FF3B30" : "#666"}
            />
          )}
        </View>
        <Text
          style={[
            profileStyles.menuItemText,
            danger && profileStyles.dangerText,
          ]}
        >
          {title}
        </Text>
      </View>

      {hasSwitch ? (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: "#E5E5E5", true: "#007AFF" }}
          thumbColor="#FFF"
          ios_backgroundColor="#E5E5E5"
        />
      ) : showChevron ? (
        <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
      ) : null}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ height: screenHeight }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={profileStyles.container}>
          {/* Header with Profile Info */}
          <ProfileHeader />

          {/* Contact Information */}
          <View style={profileStyles.section}>
            <InfoCard
              icon="mail-outline"
              iconFamily="Ionicons"
              text={userInfo.email}
              onPress={() => Alert.alert("Email", userInfo.email)}
            />
            <InfoCard
              icon="call-outline"
              iconFamily="Ionicons"
              text={userInfo.phone}
              onPress={() => Alert.alert("Phone", userInfo.phone)}
            />
            <InfoCard
              icon="location-outline"
              iconFamily="Ionicons"
              text={userInfo.location}
              onPress={() => Alert.alert("Location", userInfo.location)}
            />
          </View>

          {/* Account Settings */}
          <View style={profileStyles.section}>
            <Text style={profileStyles.sectionTitle}>Pengaturan Akun</Text>

            <MenuItem
              icon="person-outline"
              iconFamily="Ionicons"
              title="Edit Profile"
              onPress={handleEditProfile}
            />

            <MenuItem
              icon="lock-closed-outline"
              iconFamily="Ionicons"
              title="Ubah Password"
              onPress={handleChangePassword}
            />

            <MenuItem
              icon="notifications-outline"
              iconFamily="Ionicons"
              title="Notifikasi"
              hasSwitch={true}
              switchValue={notificationsEnabled}
              onSwitchChange={setNotificationsEnabled}
              showChevron={false}
            />

            <MenuItem
              icon="moon-outline"
              iconFamily="Ionicons"
              title="Mode Gelap"
              hasSwitch={true}
              switchValue={darkModeEnabled}
              onSwitchChange={setDarkModeEnabled}
              showChevron={false}
            />
          </View>

          {/* App Settings */}
          <View style={profileStyles.section}>
            <Text style={profileStyles.sectionTitle}>Tentang Aplikasi</Text>

            <MenuItem
              icon="shield-checkmark-outline"
              iconFamily="Ionicons"
              title="Privasi & Keamanan"
              onPress={handlePrivacySecurity}
            />

            <MenuItem
              icon="help-circle-outline"
              iconFamily="Ionicons"
              title="Bantuan & Dukungan"
              onPress={handleHelp}
            />

            <MenuItem
              icon="information-circle-outline"
              iconFamily="Ionicons"
              title="Tentang Aplikasi"
              onPress={handleAbout}
            />
          </View>

          {/* Logout Section */}
          <View style={profileStyles.section}>
            <MenuItem
              icon="logout"
              iconFamily="AntDesign"
              title="Keluar"
              onPress={handleLogout}
              showChevron={false}
              danger={true}
            />
          </View>

          {/* App Version */}
          <View style={profileStyles.versionContainer}>
            <Text style={profileStyles.versionText}>Versi 1.0.0</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

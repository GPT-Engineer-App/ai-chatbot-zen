import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Grid, Image, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaRobot, FaComments, FaChartLine, FaUsers } from "react-icons/fa";

const Index = () => {
  const bgGradient = useColorModeValue("linear(to-r, blue.400, gray.300)", "linear(to-r, blue.600, gray.800)");
  const testimonialBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box>
      {/* ヒーローセクション */}
      <Flex direction="column" align="center" justify="center" h="100vh" bgGradient={bgGradient} color="white" textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          AI チャットボットサービス
        </Heading>
        <Text fontSize="xl" mb={8}>
          お客様とのコミュニケーションを自動化し、ビジネスの効率化を実現
        </Text>
        <Stack direction={["column", "row"]} spacing={4}>
          <Button colorScheme="blue" size="lg">
            無料で始める
          </Button>
          <Button variant="outline" size="lg">
            デモをリクエスト
          </Button>
        </Stack>
      </Flex>

      {/* 特徴セクション */}
      <Box py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          主な特徴
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={8}>
          <Flex direction="column" align="center">
            <Icon as={FaRobot} boxSize={12} mb={4} />
            <Text fontWeight="bold">24時間365日対応</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Icon as={FaComments} boxSize={12} mb={4} />
            <Text fontWeight="bold">自然な会話</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Icon as={FaChartLine} boxSize={12} mb={4} />
            <Text fontWeight="bold">データ分析</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Icon as={FaUsers} boxSize={12} mb={4} />
            <Text fontWeight="bold">カスタマイズ可能</Text>
          </Flex>
        </Grid>
      </Box>

      {/* お客様の声セクション */}
      <Box py={20} bg={testimonialBg}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          お客様の声
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
          <Box p={6} bg="white" borderRadius="md" boxShadow="md">
            <Text fontSize="lg" mb={4}>
              「AIチャットボットを導入してから、お客様対応の効率が大幅に向上しました。」
            </Text>
            <Text fontWeight="bold">株式会社A 様</Text>
          </Box>
          <Box p={6} bg="white" borderRadius="md" boxShadow="md">
            <Text fontSize="lg" mb={4}>
              「自然な会話ができるチャットボットで、お客様満足度が上がりました。」
            </Text>
            <Text fontWeight="bold">B社 様</Text>
          </Box>
          <Box p={6} bg="white" borderRadius="md" boxShadow="md">
            <Text fontSize="lg" mb={4}>
              「チャットボットから得られるデータ分析が、マーケティング戦略に役立っています。」
            </Text>
            <Text fontWeight="bold">C株式会社 様</Text>
          </Box>
        </Grid>
      </Box>

      {/* 料金プランセクション */}
      <Box py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          料金プラン
        </Heading>
        <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={8}>
          <Box p={6} bg="gray.100" borderRadius="md" textAlign="center">
            <Text fontWeight="bold" fontSize="xl" mb={4}>
              ベーシックプラン
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
              ¥10,000{" "}
              <Text as="span" fontSize="sm">
                /月
              </Text>
            </Text>
          </Box>
          <Box p={6} bg="blue.500" color="white" borderRadius="md" textAlign="center">
            <Text fontWeight="bold" fontSize="xl" mb={4}>
              スタンダードプラン
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
              ¥30,000{" "}
              <Text as="span" fontSize="sm">
                /月
              </Text>
            </Text>
          </Box>
          <Box p={6} bg="gray.100" borderRadius="md" textAlign="center">
            <Text fontWeight="bold" fontSize="xl" mb={4}>
              プレミアムプラン
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
              ¥50,000{" "}
              <Text as="span" fontSize="sm">
                /月
              </Text>
            </Text>
          </Box>
        </Grid>
      </Box>

      {/* CTAセクション */}
      <Flex direction="column" align="center" justify="center" py={20} bgGradient={bgGradient} color="white" textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          今すぐ始めましょう！
        </Heading>
        <Text fontSize="xl" mb={8}>
          AIチャットボットで、ビジネスの効率化を実現しませんか？
        </Text>
        <Button colorScheme="blue" size="lg">
          無料で始める
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;

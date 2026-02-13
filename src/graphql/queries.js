import { gql } from '@apollo/client';

export const GET_PLANS = gql`
  query GetSubscriptionPlans {
    subscriptionPlans {
      id
      name
      price
      currency
      billingCycle
      features {
        key
        description
      }
      isPopular
    }
  }
`;

export const GET_TESTIMONIALS = gql`
  query GetTestimonials($limit: Int) {
    testimonials(limit: $limit) {
      id
      authorName
      authorRole
      pharmacyName
      content
      rating
      avatarUrl
    }
  }
`;

export const GET_STATS = gql`
  query GetAppStats {
    appStats {
      totalPharmacies
      totalMedicinesTracked
      activeUsers
    }
  }
`;
